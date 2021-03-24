import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as SC from './styles';
import Card from '../Card';
import EmptyList from '../EmptyList';
import { ArrayOfArticlePropTypes, PAGE_LIMIT } from '~/utils';

function ListArticles({ data, loading, onRefresh, onCardPress }) {
  const [articles, setArticles] = useState({ items: [], currentPage: 1 });
  const paginationHelper =
    Math.ceil(data.num_results / PAGE_LIMIT) <= articles.currentPage;

  useEffect(() => {
    if (articles.items.length !== data.results.length) {
      setArticles({
        ...articles,
        items: data?.results ? data.results.slice(0, PAGE_LIMIT) : [],
        currentPage: 1,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function getOffset(page) {
    return (page - 1) * PAGE_LIMIT;
  }

  function getFakePagination() {
    const { currentPage, items } = articles;
    if (paginationHelper) return;
    const nextPage = currentPage + 1;
    const offset = getOffset(nextPage);
    setArticles({
      items: [...items, ...data.results.slice(offset, PAGE_LIMIT + offset)],
      currentPage: nextPage,
    });
  }

  function renderItem({ item }) {
    const { multimedia, title, abstract, published_date } = item;
    // Propriedade Multimedia veio null na API por alguns minutos :O
    return (
      multimedia && (
        <Card
          imageUrl={multimedia[multimedia.length - 1].url}
          title={title}
          abstract={abstract}
          noticeDate={published_date}
          onCardPress={() => onCardPress(item)}
        />
      )
    );
  }

  function verifyEmptyList() {
    if (data.num_results > 0 || loading) return;
    return <EmptyList />;
  }

  function verifyFooterList() {
    if (paginationHelper) return;
    return <EmptyList isLoading />;
  }

  return (
    <SC.FlatList
      testID="component-flatlist"
      data={articles.items}
      initialNumToRender={5}
      refreshing={loading}
      onRefresh={onRefresh}
      renderItem={renderItem}
      keyExtractor={(item) => item.url}
      onEndReachedThreshold={0.15}
      onEndReached={getFakePagination}
      ListEmptyComponent={verifyEmptyList()}
      ListFooterComponent={verifyFooterList()}
    />
  );
}

ListArticles.propTypes = {
  data: ArrayOfArticlePropTypes.isRequired,
  loading: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
  onCardPress: PropTypes.func.isRequired,
};

export default ListArticles;
