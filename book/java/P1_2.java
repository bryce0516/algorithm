public class P1_2 {
  public static void main(String[] args) {
    int result = resultMethod(8, 14, 11, 4);

    System.out.println(result);
  }

  public static int resultMethod(int a, int b, int c, int d) {
    int max = a;
    if (max < b) {
      max = b;
    }

    if (max < c) {
      max = c;
    }

    if (max < d) {
      max = d;
    }

    return max;
  }
}
