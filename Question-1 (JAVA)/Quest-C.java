public class PangramChecker {

    public static void main(String[] args) {
        String input = "I am a Developer";
        boolean isPangram = isPangram(input);

        System.out.println("Input: " + input);
        System.out.println("Is Pangram: " + isPangram);
    }

    public static boolean isPangram(String s) {
        
        int[] Freq = new int[26];

        for (char c : s.toCharArray()) {
            char lowerC = Character.toLowerCase(c);

            if (lowerC >= 'a' && lowerC <= 'z') {
                Freq[lowerC - 'a'] = 1;
            }
        }

        for (int count : Freq) {
            if (count == 0) {
                return false;
            }
        }

        return true;
    }
}
