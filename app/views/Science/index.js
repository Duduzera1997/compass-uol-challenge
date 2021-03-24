import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import * as SC from './styles';
import { scienceActions } from '~/redux';
import {
  LinearBackground,
  Header,
  ListArticles,
  ViewArticleModal,
  SearchInput,
} from '~/components';

function ScienceScreen() {
  const { data, loading, error } = useSelector((state) => state.scienceReducer);
  const [filterText, setFilterText] = useState('');
  const [modalInfo, setModalInfo] = useState({ visible: false, item: null });
  const dispatch = useDispatch();

  useEffect(() => {
    fetchArticlesScience();
  }, [fetchArticlesScience]);

  const fetchArticlesScience = useCallback(
    () => dispatch(scienceActions.fetchSciencesAction()),
    [dispatch],
  );

  function getFilteredList() {
    if (_.isEmpty(filterText)) return data;
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
    setModalInfo({ ...modalInfo, visible: true, item });
  }

  function onRequestCloseModal() {
    setModalInfo({ ...modalInfo, visible: false, item: null });
  }

  const filteredList = getFilteredList();

  return (
    <LinearBackground>
      <SC.ContainerScience>
        {modalInfo.visible && (
          <ViewArticleModal
            visible={modalInfo.visible}
            item={modalInfo.item}
            onRequestClose={onRequestCloseModal}
          />
        )}
        <SC.ContainerByFlex flex={1}>
          <SC.ContainerByFlex flex={1}>
            <Header headerText="Science" />
          </SC.ContainerByFlex>
          {!!data?.results?.length && (
            <SC.ContainerByFlex flex={1}>
              <SearchInput onChangeText={_.debounce(setFilterText, 500)} />
            </SC.ContainerByFlex>
          )}
          <SC.ContainerByFlex flex={6}>
            <ListArticles
              data={filteredList}
              loading={
                loading || (!loading && !!filterText && !!filteredList.length)
              }
              error={error}
              onRefresh={fetchArticlesScience}
              onCardPress={onCardPressed}
            />
          </SC.ContainerByFlex>
        </SC.ContainerByFlex>
      </SC.ContainerScience>
    </LinearBackground>
  );
}
export default ScienceScreen;
