public class Array1 {
    public static int linearSearch(int marks[], int key) {
        for(int i=0; i < marks.length; i++) {
            if(marks[i] == key) {
                return i;
            }
        }
        return -1;
    } 

    public static int printLargest(int marks[]) {
        int large = Integer.MIN_VALUE;
        for(int i=0; i < marks.length; i++) {
            if(marks[i] > large) {
                large = marks[i];
            }
        }
        return large;
    }

    public static int printSmallest(int marks[]) {
        int small = Integer.MAX_VALUE;
        for(int i=0; i < marks.length; i++) {
            if(marks[i] < small) {
                small = marks[i];
            }
        }
        return small;
    }

    public static int binarySearch(int marks[], int key) {
        int start = 0;
        int end = marks.length -1;
        while(start <= end) {
            int mid = (start + end) / 2;
            if(marks[mid] == key) return mid;
            if (marks[mid] < end) start = mid + 1;
            else end = mid-1;
        }
        return -1;
    }

    public static void reverseArray(int marks[]) {
        int start = 0;
        int end = marks.length-1;

        while(start < end) {
            int temp = marks[start];
            marks[start] = marks[end];
            marks[end] = temp;
            start++;
            end--;
        }
    }

    public static void arrayPair(int marks[]) {
        int pairs = 0;
        for(int i=0; i < marks.length; i++) {
            for(int j=i+1; j < marks.length; j++) {
                System.out.print("(" + marks[i] + "," + marks[j] + ")" + " ");
                pairs++;
            }
            System.out.println();
        }
        System.out.println(pairs);
    }

    public static void subArray(int marks[]) {
        for(int i=0; i < marks.length; i++) {
            int start = i;
            for(int j=i; j < marks.length; j++) {
                int end = j;
                for(int k=start; k <= end; k++) {
                    System.out.print(marks[k] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }
    }

    public static void printSubArray(int marks[]) {
        int curr = 0;
        int max = Integer.MIN_VALUE;

        for(int i=0; i < marks.length; i++) {
            int start = i;
            for(int j=i; j < marks.length; j++) {
                int end = j;
                curr = 0;
                for(int k=start; k <= end; k++) {
                    curr += marks[k];
                }
                // System.out.println(curr);
                if(max < curr) {
                    max = curr;
                }
            }
            System.out.println();
        }
        System.out.println("Max sum: " + max);
    }

    public static void prefixSubArraySum(int marks[]) {
        int curr = 0;
        int max = Integer.MIN_VALUE;
        int prefix[] = new int[marks.length];
        prefix[0] = marks[0];

        for(int i=1; i < prefix.length; i++) {
            prefix[i] = prefix[i-1] + marks[i];
        }

        for(int i=0; i < marks.length; i++) {
            int start = i;
            for(int j=i; j < marks.length; j++) {
                int end = j;
                curr = start == 0? prefix[end]: prefix[end] - prefix[start-1];

                if(max < curr) {
                    max = curr;
                }
            }
        }
        System.out.println("Max sum: " + max);
    }

    public static void kadanes(int marks[]) {
        int curr = 0;
        int max = Integer.MIN_VALUE;

        for(int i=0; i < marks.length; i++) {
            curr += marks[i];
            if(curr < 0) curr = 0;
            max = Math.max(curr, max);
        }
        System.out.println("Max sum of sub array: " + max);
    }
    
    public static void main(String[] args) {
        // int marks[] = {2, 4, 5, 8, 16, 25, 78, 102};
        int nums[] = {-2, -3, 4, -1, -2, 1, 5, -3};
        // int key = 16;
        
        // int index = linearSearch(marks, key);
        // if(index == -1) System.out.println("Not found");
        // else System.out.println("Index at " + index);

        // System.out.println("Largest element: "+ printLargest(marks));
        // System.out.println("Smallest element: "+ printSmallest(marks));
        // System.out.println("Binary element at index: "+ binarySearch(marks, key));

        // reverseArray(marks);
        // for(int i=0; i < marks.length; i++) {
        //     System.out.print(marks[i] + " ");
        // }

        // arrayPair(marks);
        // subArray(marks);
        // printSubArray(marks);
        // prefixSubArraySum(marks);
        kadanes(nums);
    }
}