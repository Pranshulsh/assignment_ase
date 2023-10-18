import java.util.Random;

public class ArrayShuffler {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};

        System.out.println("Original Array:");
        printArray(arr);

        shuffleArray(arr);

        System.out.println("\nShuffled Array:");
        printArray(arr);
    }

    private static void shuffleArray(int[] arr) {
        int n = arr.length;
        Random random = new Random();

        for (int i = n - 1; i > 0; i--) {
            int Index = random.nextInt(i + 1);

            
            int temp = arr[i];
            arr[i] = arr[Index];
            arr[Index] = temp;
        }
    }

    private static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }
}
