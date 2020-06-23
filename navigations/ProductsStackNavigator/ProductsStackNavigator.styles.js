export const headerSharedTitleValueProperties = (route) => {
  const { params: title } = route;
  return title.length < 25 ? "Description" : title;
};
