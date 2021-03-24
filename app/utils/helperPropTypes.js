import PropTypes from 'prop-types';

export const ArrayOfArticlePropTypes = PropTypes.shape({
  last_updated: PropTypes.string,
  num_results: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape(ArticlePropTypes)).isRequired,
});

export const ArticlePropTypes = PropTypes.shape({
  section: PropTypes.string,
  subsection: PropTypes.string,
  title: PropTypes.string,
  abstract: PropTypes.string,
  url: PropTypes.string,
  uri: PropTypes.string,
  byline: PropTypes.string,
  item_type: PropTypes.string,
  updated_date: PropTypes.string,
  created_date: PropTypes.string,
  published_date: PropTypes.string,
  material_type_facet: PropTypes.string,
  kicker: PropTypes.string,
  des_facet: PropTypes.arrayOf(PropTypes.string),
  org_facet: PropTypes.arrayOf(PropTypes.string),
  per_facet: PropTypes.arrayOf(PropTypes.string),
  geo_facet: PropTypes.arrayOf(PropTypes.string),
  multimedia: PropTypes.arrayOf(PropTypes.shape(MultimidiaPropTypes)),
  short_url: PropTypes.string,
});

export const MultimidiaPropTypes = PropTypes.shape({
  url: PropTypes.string,
  format: PropTypes.string,
  height: PropTypes.integer,
  width: PropTypes.integer,
  type: PropTypes.string,
  subtype: PropTypes.string,
  caption: PropTypes.string,
  copyright: PropTypes.string,
});
