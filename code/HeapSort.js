export const heapSortCode = {
  python: `def heapSort(arr):
  n = len(arr)
  # Create MaxHeap
  for i in range(n // 2 -1, -1, -1):
      heapify(arr, n, i)
  
  # Place max elements to back array one by one
  for i in range(n-1, -1, -1):
      arr[i], arr[0] = arr[0], arr[i]
      heapify(arr, i, 0)
  return arr

def heapify(arr, size, i):
  largest = i
  left = 2*i+1
  right = 2*i+2
  
  if left < size and arr[left] > arr[largest]:
      largest = left
  
  if right < size and arr[right] > arr[largest]:
      largest = right
  
  # Swap needed with child node
  if largest != i:
      arr[i], arr[largest] = arr[largest], arr[i]
      heapify(arr, size, largest)`,
  javascript: `function heapSort(arr) {
    const n = arr.length;
    // Create MaxHeap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Place max elements to back array one by one
    for (let i = n - 1; i >= 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, size, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    // Swap needed with child node
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, size, largest);
    }
}
      `,
  cpp: `int* heapSort(int arr[], int n) {
    // Create MaxHeap
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Place max elements to back array one by one
    for (int i = n - 1; i >= 0; i--) {
        swap(arr[i], arr[0]);
        heapify(arr, i, 0);
    }
    return arr;
}

void heapify(int arr[], int size, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    // Swap needed with child node
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, size, largest);
    }
}`,
  c: `int* heapSort(int arr[], int n) {
    // Create MaxHeap
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Place max elements to back array one by one
    for (int i = n - 1; i >= 0; i--) {
        int temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        heapify(arr, i, 0);
    }
    return arr;
}

void heapify(int arr[], int size, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    // Swap needed with child node
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, size, largest);
    }
}`,
  java: `public static int[] heapSort(int[] arr) {
    int n = arr.length;
    // Create MaxHeap
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Place max elements to back array one by one
    for (int i = n - 1; i >= 0; i--) {
        int temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        heapify(arr, i, 0);
    }
    return arr;
}

public static void heapify(int[] arr, int size, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < size && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < size && arr[right] > arr[largest]) {
        largest = right;
    }

    // Swap needed with child node
    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        heapify(arr, size, largest);
    }
}`,
};
