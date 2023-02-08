function getGrade(s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3;
  switch (avg) {
    case avg >= 90:
      return "A";
    case avg >= 80:
      return "B";
    case avg >= 80:
      return "C";
    case avg >= 70:
      return "D";
    case avg >= 0:
      return "F";
  }
}

getGrade(90, 85, 94);
