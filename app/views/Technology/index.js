import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, debounce } from 'lodash';

import { techActions } from '~/redux';
import { ListArticles, ContentWrapper } from '~/components';

function TechnologyScreen() {
  const { data, loading, error } = useSelector((state) => state.techReducer);
  const [filterText, setFilterText] = useState('');

  const [modalVisibilityInfo, setModalVisibilityInfo] = useState({
    visible: false,
    item: {},
  });
  const dispatch = useDispatch();

  useEffect(() => {
    fetchArticlesTechnology();
  }, [fetchArticlesTechnology]);

  const fetchArticlesTechnology = useCallback(
    () => dispatch(techActions.fetchTechnologiesAction()),
    [dispatch],
  );

  function getFilteredList() {
    if (isEmpty(filterText)) return data;
    const filteredResults = data.results.filter(
      (item) =>
        item.title.toLowerCase().includes(filterText.toLowerCase()) ||
        item.abstract.toLowerCase().includes(filterText.toLowerCase()),
    );
    return {
      ...data,
      results: filteredResults,
      num_results: filteredResults.length,
    };
  }

  function onCardPressed(item) {
    setModalVisibilityInfo({ ...modalVisibilityInfo, visible: true, item });
  }

  function onRequestClose() {
    setModalVisibilityInfo({
      ...modalVisibilityInfo,
      visible: false,
      item: {},
    });
  }

  const filteredList = getFilteredList();

  return (
    <ContentWrapper
      title="Technology"
      showSearchInput={!!data?.results?.length}
      onSeachInputTextChange={debounce(setFilterText, 500)}
      modalProps={{
        ...modalVisibilityInfo,
        onRequestClose,
      }}>
      <ListArticles
        data={filteredList}
        loading={loading || (!!filterText && !!filteredList.length)}
        error={error}
        onRefresh={fetchArticlesTechnology}
        onCardPress={onCardPressed}
      />
    </ContentWrapper>
  );
}

export default TechnologyScreen;
