import java.util.Arrays;

public class L520 {
  public static void main(String[] args) {
    L520R l520R = new L520R();
    boolean result = l520R.detectCapitalUse("Google");
    System.out.println(result);
  }

}

class L520R {
  public boolean detectCapitalUse(String word) {
    int wordLength = word.length();
    int wordCaps = 0;
    char[] wordArr = word.toCharArray();
    for (int i = 0; i < wordArr.length; i++) {
      if (Character.isUpperCase(wordArr[i])) {
        wordCaps++;
      }
    }

    if (wordLength == wordCaps || wordCaps == 0)
      return true;
    return wordCaps == 1 && Character.isUpperCase(wordArr[0]);
  }
}