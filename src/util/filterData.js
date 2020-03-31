export const filteredIds = (data, search) => {
  if (search === "") return data.map(el => el[1]);
  return data.filter(element => {
    // element = [searchableAttribute, id]
    return element[0].toLowerCase().includes(search.toLowerCase())
  }).map(el => el[1]);
};
