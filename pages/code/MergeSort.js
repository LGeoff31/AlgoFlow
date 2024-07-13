export const mergeSortCode = {
  python: `def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        # Recursively break down the entire array by into left and right halves until they only contain one element
        leftArr = mergeSort(arr[:mid])
        rightArr = mergeSort(arr[mid:])
        # Construct a sorted array by combining leftArr and rightArr with a two pointer algorithm
        l = r = k = 0
        while l < len(leftArr) and r < len(rightArr):
            if leftArr[l] <= rightArr[r]:
                arr[k] = leftArr[l]
                l += 1
            else:
                arr[k] = rightArr[r]
                r += 1
            k += 1
        # Copy remaining elements from leftArr, if any
        while l < len(leftArr):
            arr[k] = leftArr[l]
            l += 1
            k += 1
        # Copy remaining elements from leftArr, if any
        while r < len(rightArr):
            arr[k] = rightArr[r]
            r += 1
            k += 1
        return arr
    return arr`,
  javascript: `function mergeSort(arr) {
    if (arr.length > 1) {
        const mid = Math.floor(arr.length / 2);
        // Recursively break down the entire array by into left and right halves until they only contain one element
        let leftArr = mergeSort(arr.slice(0, mid))
        let rightArr = mergeSort(arr.slice(mid, arr.length))
        // Construct a sorted array by combining leftArr and rightArr with a two pointer algorithm
        let l = 0; r = 0; k = 0;
        while (l < leftArr.length && r < rightArr.length) {
            if (leftArr[l] <= rightArr[r]) {
                arr[k] = leftArr[l];
                l++;
            } else {
                arr[k] = rightArr[r];
                r++;
            }
            k++;
        }
        // Copy remaining elements from leftArr, if any
        while (l < leftArr.length) {
            arr[k] = leftArr[l];
            l++;
            k++;
        }
        // Copy remaining elements from leftArr, if any
        while (r < rightArr.length) {
            arr[k] = rightArr[r];
            r++;
            k++;
        }
        return arr;
    }
    return arr;
}
    `,
  cpp: `vector<int> mergeSort(vector<int>& arr) {
    if (arr.size() > 1) {
        int mid = arr.size() / 2;
        // Recursively break down the entire array into left and right halves until they only contain one element
        vector<int> leftArr(arr.begin(), arr.begin() + mid);
        vector<int> rightArr(arr.begin() + mid, arr.end());
        leftArr = mergeSort(leftArr);
        rightArr = mergeSort(rightArr);
        // Construct a sorted array by combining leftArr and rightArr with a two-pointer algorithm
        vector<int> result(arr.size());
        int l = 0, r = 0, k = 0;
        while (l < leftArr.size() && r < rightArr.size()) {
            if (leftArr[l] <= rightArr[r]) {
                result[k] = leftArr[l];
                l++;
            } else {
                result[k] = rightArr[r];
                r++;
            }
            k++;
        }
        // Copy remaining elements from leftArr, if any
        while (l < leftArr.size()) {
            result[k] = leftArr[l];
            l++;
            k++;
        }
        // Copy remaining elements from leftArr, if any
        while (r < rightArr.size()) {
            result[k] = rightArr[r];
            r++;
            k++;
        }
        return result;
    }
    return arr;
}`,
  c: `void merge(int arr[], int temp[], int left, int mid, int right) {
    int i = left;    
    int j = mid + 1; 
    int k = left;    
    // Merge the two halves into the temporary array temp[]
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    // Copy the remaining elements of left subarray, if any
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    // Copy the remaining elements of right subarray, if any
    while (j <= right) {
        temp[k++] = arr[j++];
    }
    // Copy the merged temporary array back to the original array
    for (i = left; i <= right; i++) {
        arr[i] = temp[i];
    }
}

void mergeSort(int arr[], int temp[], int left, int right) {
    if (left < right) {
        int mid = (left + right) / 2;
        // Recursively sort the left and right halves
        mergeSort(arr, temp, left, mid);
        mergeSort(arr, temp, mid + 1, right);
        // Merge the sorted halves
        merge(arr, temp, left, mid, right);
    }
}`,
  java: `public static int[] mergeSort(int[] arr) {
    if (arr.length > 1) {
        int mid = arr.length / 2;
        // Recursively break down the entire array into left and right halves until they only contain one element
        int[] leftArr = Arrays.copyOfRange(arr, 0, mid);
        int[] rightArr = Arrays.copyOfRange(arr, mid, arr.length);
        
        leftArr = mergeSort(leftArr);  
        rightArr = mergeSort(rightArr); 
        
        // Merge sorted leftArr and rightArr into arr using a two-pointer algorithm
        int l = 0, r = 0, k = 0;
        while (l < leftArr.length && r < rightArr.length) {
            if (leftArr[l] <= rightArr[r]) {
                arr[k++] = leftArr[l++];
            } else {
                arr[k++] = rightArr[r++];
            }
        }
        // Copy remaining elements from leftArr, if any
        while (l < leftArr.length) {
            arr[k++] = leftArr[l++];
        }
        // Copy remaining elements from rightArr, if any
        while (r < rightArr.length) {
            arr[k++] = rightArr[r++];
        }
    }
    return arr;
}`,
};
