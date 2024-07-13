export const selectionSortCode = {
  python: `def selectionSort(arr):
  for i in range(len(arr)):
      minElem = arr[i]
      minIdx = i
      # Loop through remaining array for a smaller element than current, then swap
      for j in range(i+1, len(arr)):
          if arr[j] < minElem:
              minElem = arr[j]
              minIdx = j
      arr[i], arr[minIdx] = arr[minIdx], arr[i]
  return arr`,
  javascript: `function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minElem = arr[i];
        let minIdx = i;
        // Loop through remaining array for a smaller element than current, then swap
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < minElem) {
                minElem = arr[j];
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}`,
  cpp: `void selectionSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        int minElem = arr[i];
        int minIdx = i;
        // Loop through remaining array for a smaller element than current, then swap
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < minElem) {
                minElem = arr[j];
                minIdx = j;
            }
        }
        swap(arr[i], arr[minIdx]);
    }
}`,
  c: `void selectionSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        int minElem = arr[i];
        int minIdx = i;
        // Loop through remaining array for a smaller element than current, then swap
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < minElem) {
                minElem = arr[j];
                minIdx = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}`,
  java: `public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        int minElem = arr[i];
        int minIdx = i;
        // Loop through remaining array for a smaller element than current, then swap
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < minElem) {
                minElem = arr[j];
                minIdx = j;
            }
        }
        int temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
}`,
};
