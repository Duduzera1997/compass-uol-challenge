import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import * as SC from './styles';
import { techActions } from '~/redux';
import {
  LinearBackground,
  Header,
  ListArticles,
  ViewArticleModal,
  SearchInput,
} from '~/components';

function TechnologyScreen() {
  const { data, loading, error } = useSelector((state) => state.techReducer);
  const [filterText, setFilterText] = useState('');

  const [modalInfo, setModalInfo] = useState({ visible: false, item: null });
  const dispatch = useDispatch();

  useEffect(() => {
    fetchArticlesTechnology();
  }, [fetchArticlesTechnology]);

  const fetchArticlesTechnology = useCallback(
    () => dispatch(techActions.fetchTechnologiesAction()),
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
      <SC.ContainerTech>
        {modalInfo.visible && (
          <ViewArticleModal
            visible={modalInfo.visible}
            item={modalInfo.item}
            onRequestClose={onRequestCloseModal}
          />
        )}
        <SC.ContainerByFlex flex={1}>
          <SC.ContainerByFlex flex={1}>
            <Header headerText="Technology" />
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
              onRefresh={fetchArticlesTechnology}
              onCardPress={onCardPressed}
            />
          </SC.ContainerByFlex>
        </SC.ContainerByFlex>
      </SC.ContainerTech>
    </LinearBackground>
  );
}

export default TechnologyScreen;
