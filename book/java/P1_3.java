public class P1_3 {
  public static void main(String[] args) {
    String answer = resultMethod(2, 2, 3);

    int[] arr = { 1, 2, 3, 4, 5 };
    int[] arr2 = new int[5];
    for (int i = 0; i < arr.length; i++) {
      arr2[i] = arr[arr.length - i - 1];
      System.out.println(arr[arr.length - i - 1]);
    }

    System.out.println(arr2);
  }

  public static String resultMethod(int a, int b, int c) {

    int max = a;
    int med = b;
    int min = c;
    if (a > b) {
      if (a > c) {
        max = a;
        if (b > c) {
          med = b;
          min = c;
        } else {
          med = c;
          min = b;
        }
      } else {
        max = c;
        if (a < b) {
          med = b;
          min = a;
        } else {
          med = a;
          min = b;
        }
      }
    } else {
      if (b > c) {
        max = b;
        if (a > c) {
          med = a;
          min = c;
        } else {
          med = c;
          min = a;
        }
      } else {
        max = c;
        if (a > b) {
          med = a;
          min = b;
        } else {
          med = b;
          min = a;
        }
      }
    }

    String mx = Integer.toString(max);
    String me = Integer.toString(med);
    String mi = Integer.toString(min);
    String result = "max: " + mx + "med: " + me + "min: " + mi;
    return result;
  }
}
