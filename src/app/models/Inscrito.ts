export class Inscrito {

    private periodo: string;
    private temporal: string;
    private carrera: string;
    private cedula: string;
    private nombres: string;
    private apellidos: string;
    private email: string;
    private telefono: string;
    private valorPagar: string;
    private sarhead_APPL_SEQNO: string;
    private sarhead_AIDM: string;

    constructor($periodo: string, $temporal: string, $carrera: string, $cedula: string, $nombres: string,
        $apellidos: string, $email: string, $telefono: string, $valorPagar: string, $sarhead_APPL_SEQNO: string, $sarhead_AIDM: string) {
        this.periodo = $periodo;
        this.temporal = $temporal;
        this.carrera = $carrera;
        this.cedula = $cedula;
        this.nombres = $nombres;
        this.apellidos = $apellidos;
        this.email = $email;
        this.telefono = $telefono;
        this.valorPagar = $valorPagar;
        this.sarhead_APPL_SEQNO = $sarhead_APPL_SEQNO;
        this.sarhead_AIDM = $sarhead_AIDM;
    }

}
