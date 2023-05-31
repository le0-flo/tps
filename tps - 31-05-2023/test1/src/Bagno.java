public class Bagno {
    private Boolean occupato;

    public Bagno() {
        occupato = false;
    }

    public synchronized Boolean entra(String nome) {
        if (!occupato) {
            occupato = true;
            System.out.println("Il bagno è occupato da " + nome);
            
            return true;
        } else {
            try {
                wait();
            } catch (IllegalMonitorStateException e) {
                System.out.println("[ERRORE] IllegalMonitorException");
            } catch (InterruptedException e) {
                System.out.println("[ERRORE] InterruptedException");
            }
            
            return false;
        }
    }

    public synchronized void esci() {
        occupato = false;
        System.out.println("Il bagno è libero");

        notifyAll();
    }
}
