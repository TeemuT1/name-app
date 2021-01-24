import { useState, useMemo } from 'react'

export const useSortableData = (items, config = null) => {
  const [sortStatus, setSortStatus] = useState(config)

  const compareItems = (a, b) => {
    if (a[sortStatus.key] < b[sortStatus.key]) {
      return sortStatus.order === 'ascending' ? -1 : 1
    }
    if (a[sortStatus.key] > b[sortStatus.key]) {
      return sortStatus.order === 'ascending' ? 1 : -1
    }
    return 0
  }

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]
    if (sortStatus !== null) {
      sortableItems.sort(compareItems)
    }
    return sortableItems
  }, [items, sortStatus])

  const requestSortBy = key => {
    let order = 'ascending'
    if (sortStatus && sortStatus.key === key && sortStatus.order === 'ascending') {
      order = 'descending'
    }
    setSortStatus({ key, order })
  }

  return { items: sortedItems, requestSortBy, sortStatus }
}