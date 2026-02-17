public class Matrices {
    public static boolean searchElement(int mat[][], int key) {
        for(int i=0; i < mat.length; i++) {
            for(int j=0; j < mat[0].length; j++) {
                if(mat[i][j] == key){
                    System.out.println("Found at " + i + "," + j);
                    return true;
                }
            }
        }
        System.out.println("Key not found");
        return false;
    }

    public static void printMatrix(int matrix[][]) {
        for(int i=0; i < matrix.length; i++) {
            for(int j=0; j < matrix[0].length ; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void spiralMatrix(int matrix[][]) {
        int startRow = 0;
        int startCol = 0;
        int endRow = matrix.length - 1;
        int endCol = matrix[0].length - 1;

        while(startRow <= endRow && startCol <= endCol) {
            //top
            for(int j=startCol; j <= endCol; j++) {
                System.out.print(matrix[startRow][j] + " ");
            }

            //right
            for(int i=startRow+1; i <= endRow; i++) {
                System.out.print(matrix[i][endCol] + " ");
            }

            //bottom
            for(int j= endCol-1; j >= startCol; j--) {
                if(startRow == endRow) break;
                System.out.print(matrix[endRow][j] + " ");
            }

            //left
            for(int i= endRow-1; i >= startRow+1; i--) {
                if(startCol == endCol) break;
                System.out.print(matrix[i][startCol] + " ");
            }
            startRow++;
            startCol++;
            endRow--;
            endCol--;
        }
        System.out.println();
    }
    public static void main(String[] args) {
        int matrix[][] = {
                        {1, 2, 3, 4},
                        {5, 6, 7, 8},
                        {9, 10, 11, 12},
                        {13, 14, 15, 16}
                    };
        spiralMatrix(matrix);
    }
}
