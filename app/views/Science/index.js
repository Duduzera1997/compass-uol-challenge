import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty, debounce } from 'lodash';

import { scienceActions } from '~/redux';
import { ListArticles, ContentWrapper } from '~/components';
import { fetchSciences } from '~/redux/modules/science/sagas';

function ScienceScreen() {
  const { data, loading, error } = useSelector((state) => state.scienceReducer);
  const [filterText, setFilterText] = useState('');
  const [modalVisibilityInfo, setModalVisibilityInfo] = useState({
    visible: false,
    item: {},
  });
  const dispatch = useDispatch();

  useEffect(() => {
    fetchArticlesScience();
  }, [fetchArticlesScience]);

  const fetchArticlesScience = useCallback(
    () => dispatch(scienceActions.fetchSciencesAction()),
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
      title="Science"
      showSearchInput={!!data.num_results}
      onSeachInputTextChange={debounce(setFilterText, 500)}
      modalProps={{
        ...modalVisibilityInfo,
        onRequestClose,
      }}>
      <ListArticles
        data={filteredList}
        loading={loading || (!!filterText && !!filteredList.length)}
        error={error}
        onRefresh={fetchSciences}
        onCardPress={onCardPressed}
      />
    </ContentWrapper>
  );
}
export default ScienceScreen;
