import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import * as SC from './styles';
import ArticlesDataPropTypes from './defaultPropTypes';
import Card from '../Card';
import EmptyList from '../EmptyList';
import { PAGE_LIMIT } from '~/utils/constants';

function ListArticles({ data, loading, onRefresh, onCardPress }) {
  const [articles, setArticles] = useState({ items: [], currentPage: 1 });

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

  function getOffSet(page) {
    return (page - 1) * PAGE_LIMIT;
  }

  function getFakePagination() {
    const { currentPage, items } = articles;
    if (Math.ceil(data.num_results / PAGE_LIMIT) <= currentPage) return;
    const nextPage = currentPage + 1;
    const offset = getOffSet(nextPage);
    setArticles({
      items: [...items, ...data.results.slice(offset, PAGE_LIMIT + offset)],
      currentPage: nextPage,
    });
  }

  function getItem(list, index) {
    return list[index];
  }

  function getItemCount(list) {
    return list.length;
  }

  function renderItem({ item }) {
    const { multimedia, title, abstract, published_date } = item;
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

  return (
    <SC.VirtualList
      data={articles.items}
      refreshControl={
        <RefreshControl
          enabled={!loading && !!data.num_results}
          refreshing={loading}
          onRefresh={onRefresh}
        />
      }
      renderItem={renderItem}
      keyExtractor={(item) => item.url}
      getItemCount={getItemCount}
      getItem={getItem}
      onEndReachedThreshold={0.1}
      keyboardShouldPersistTaps="never"
      onEndReached={getFakePagination}
      ListEmptyComponent={<EmptyList isLoading={loading} />}
    />
  );
}

ListArticles.propTypes = {
  data: ArticlesDataPropTypes.isRequired,
  loading: PropTypes.bool.isRequired,
  onRefresh: PropTypes.func.isRequired,
  onCardPress: PropTypes.func.isRequired,
};

export default ListArticles;
