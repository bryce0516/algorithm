import java.util.Scanner;

public class P1_1 {
  public static void main(String[] args) {
    P1_1Solution p1_1Solution = new P1_1Solution();
    int result = p1_1Solution.maxValue(4, 8, 3);
    System.out.println(result);
  }
}

class P1_1Solution {
  public int maxValue(int x, int y, int z) {
    int max = x;
    if (max < y) {
      max = y;
    }
    if (max < z) {
      max = z;
    }
    return max;
  }
}
