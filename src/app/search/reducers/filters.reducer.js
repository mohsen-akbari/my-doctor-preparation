export function filtersReducer(filters, action) {
  switch (action.type) {
    case "updated_filter": {
      return { ...filters, [action.key]: action.value };
    }
    case "removed_filter": {
      const clonedFilters = { ...filters };
      delete clonedFilters[action.key];
      return clonedFilters;
    }
    case "removed_all": {
      return {};
    }
  }
}
