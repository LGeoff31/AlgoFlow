const heapSortCode = {
  python: `def heapify(arr, n, i):
    largest = i
    left = 2*i+1
    right = 2*i+2
    if left < n and arr[left] > arr[largest]:
        largest = left
    if right < n and arr[right] > arr[largest]:
        largest = right
    if i != largest:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
        
        

def heapSort(arr):
    n = len(arr)
    for i in range(n//2-1, -1, -1):
        heapify(arr,n,i)
    for i in range(n-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)
    return arr`,
  javascript: `function bubbleSort(arr) {
      for (let i = 0; i < arr.length; i++) {
          // Assumes largest ith numbers are already placed at the end of the array, hence no need to iterate over them
          for (let j = 0; j < arr.length - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  // Swap arr[j] and arr[j + 1]
                  let temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
      return arr;
  }
        `,
  cpp: `std::vector<int> bubbleSort(std::vector<int>& arr) {
      for (size_t i = 0; i < arr.size(); ++i) {
          // Assumes largest ith numbers are already placed at the end of the array, hence no need to iterate over them
          for (size_t j = 0; j < arr.size() - i - 1; ++j) {
              if (arr[j] > arr[j + 1]) {
                  // Swap arr[j] and arr[j + 1]
                  std::swap(arr[j], arr[j + 1]);
              }
          }
      }
      return arr;
  }`,
  c: `void bubbleSort(int arr[], int n) {
      for (int i = 0; i < n; i++) {
          // Assumes largest ith numbers are already placed at the end of the array, hence no need to iterate over them
          for (int j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  // Swap arr[j] and arr[j + 1]
                  int temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
  }`,
  java: `public static void bubbleSort(int[] arr) {
      int n = arr.length;
      for (int i = 0; i < n; i++) {
          // Assumes largest ith numbers are already placed at the end of the array, hence no need to iterate over them
          for (int j = 0; j < n - i - 1; j++) {
              if (arr[j] > arr[j + 1]) {
                  // Swap arr[j] and arr[j + 1]
                  int temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
              }
          }
      }
  }
  `,
};
export default heapSortCode;
