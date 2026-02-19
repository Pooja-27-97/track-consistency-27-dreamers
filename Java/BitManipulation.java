public class BitManipulation {
    public static void checkOddEven(int bit) {
        if((bit & 1) != 0) System.out.println("Odd");
        else System.out.println("Even");
    }

    public static int getIthBit(int bit, int i) {
        int bitMask = 1 << i;
        if((bit & bitMask) == 0) return 0;
        else return 1;
    }

    public static int setIthBit(int bit, int i) {
        int bitmask = 1<<i;
        return (bit | bitmask);
    }

    public static int clearIthBit(int bit, int i) {
        int bitmask = ~(1<<i);
        return (bit & bitmask);
    }

    public static int updateIthBit(int bit,int i, int newBit) {
        // if(newBit == 0) return clearIthBit(bit, i);
        // else return setIthBit(bit, i);

        //or
        bit = clearIthBit(bit, i);
        int bitMask = newBit << i;
        return (bit | bitMask);
    }
    public static void main(String[] args) {
        // checkOddEven(10);
        // System.out.println(getIthBit(8, 3));
        // System.out.println(setIthBit(9, 2));
        // System.out.println(clearIthBit(9, 3));
        System.out.println(updateIthBit(10, 2, 1));
    }
}
