import React from "react";
import { CATEGORIES_MAPPER } from "config";

/**
 *
 * @param {Object} props
 * @param {string} props.category
 * @param {string} props.fontSize
 */
export const ItemIcon = ({ category, fontSize }) => {
  const getCategoryComponent = () => {
    return CATEGORIES_MAPPER[category]
      ? CATEGORIES_MAPPER[category].component
      : CATEGORIES_MAPPER.other.component;
  };

  return React.createElement(getCategoryComponent(), { fontSize: fontSize });
};
