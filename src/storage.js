const storageKey = "todo-react";

function getStorage() {
  const data = localStorage.getItem(storageKey);
  if (!data) return [];
  return JSON.parse(data);
}

function setStorage(data) {
  localStorage.setItem(storageKey, JSON.stringify(data));
}

export { getStorage, setStorage };
