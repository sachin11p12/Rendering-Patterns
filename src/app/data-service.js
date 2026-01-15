export async function getMockData(type) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    timestamp: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    type: type,
    id: Math.random().toString(36).substr(2, 9),
    message: `This data was fetched using ${type} technique.`,
  };
}
