export const quickSortCode = {
  python: `def partition(arr, low, high):
  # Default pick last element to be pivot
  pivot = arr[high]
  i = low - 1
  # Partition all elements less than pivot to be on the left side
  for j in range(low, high):
      if arr[j] <= pivot:
          i += 1
          arr[j], arr[i] = arr[i], arr[j]
  # Place the pivot in correct location
  arr[i+1], arr[high] = arr[high], arr[i+1]
  return i+1

def quickSort(arr, low, high):
  if low < high:
      idx = partition(arr, low, high)
      
      quickSort(arr, low, idx - 1)
      quickSort(arr, idx+1, high)
  return arr`,
  javascript: `function partition(arr, low, high) {
    // Default pick last element to be pivot
    let pivot = arr[high];
    let i = low - 1;
    // Partition all elements less than pivot to be on the left side
    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[j], arr[i]] = [arr[i], arr[j]]; // Swap arr[i] and arr[j]
        }
    }
    // Place the pivot in correct location
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let idx = partition(arr, low, high);

        quickSort(arr, low, idx - 1);
        quickSort(arr, idx + 1, high);
    }
    return arr;
}`,
  cpp: `int partition(vector<int>& arr, int low, int high) {
    // Default pick last element to be pivot
    int pivot = arr[high];
    int i = low - 1;
    // Partition all elements less than pivot to be on the left side
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // Place the pivot in correct location
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int idx = partition(arr, low, high);
        quickSort(arr, low, idx - 1);
        quickSort(arr, idx + 1, high);
    }
}`,
  c: `int partition(int arr[], int low, int high) {
    // Default pick last element to be pivot
    int pivot = arr[high];
    int i = low - 1;
    // Partition all elements less than pivot to be on the left side
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int idx = partition(arr, low, high);
        quickSort(arr, low, idx - 1);
        quickSort(arr, idx + 1, high);
    }
}`,
  java: `public static int partition(int[] arr, int low, int high) {
    // Default pick last element to be pivot
    int pivot = arr[high];
    int i = low - 1;
    // Partition all elements less than pivot to be on the left side
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    // Place the pivot in correct location
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int idx = partition(arr, low, high);
        quickSort(arr, low, idx - 1);
        quickSort(arr, idx + 1, high);
    }
}`,
};
