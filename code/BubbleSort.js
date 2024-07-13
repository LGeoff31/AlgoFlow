export const bubbleSortCode = {
  python: `def bubbleSort(arr):
    for i in range(len(arr)):
        # Assumes largest ith numbers are already placed at the end of the array, hence no need to iterate over them
        for j in range(len(arr) - i - 1): 
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`,
  javascript: `function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
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
  cpp: `vector<int> bubbleSort(std::vector<int>& arr) {
    for (size_t i = 0; i < arr.size(); ++i) {
        // Assumes largest ith numbers are already placed at the end of the array, hence no need to iterate over them
        for (size_t j = 0; j < arr.size() - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
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
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
`,
};
