import java.util.HashMap;

public class RomanToInteger {

    public static void main(String[] args) {
        String romanNumeral = "X";
        int ans = romanToInt(romanNumeral);

        System.out.println("Roman Numeral: " + romanNumeral);
        System.out.println("Integer: " + ans);
    }

    public static int romanToInt(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);

        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            int curr = map.get(s.charAt(i));

            if (i < s.length() - 1) {
                int next = map.get(s.charAt(i + 1));

                if (curr < next) {
                    result += (next - curr);
                    i++; 
                } 
                else {
                    result += curr;
                }
            } else {
                result += curr;
            }
        }

        return result;
    }
}
