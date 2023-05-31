public class Main {
    public static void main(String[] args) throws Exception {
        Bagno bagno = new Bagno();

        Stupido u1 = new Stupido("A", bagno);
        Stupido u2 = new Stupido("B", bagno);
        Stupido u3 = new Stupido("C", bagno);

        Thread thu1 = new Thread(u1);
        Thread thu2 = new Thread(u2);
        Thread thu3 = new Thread(u3);

        thu1.start();
        thu2.start();
        thu3.start();
    }
}
