import {CustomError} from '../../errors/CustomError';

export interface CreateTableroDtoProps {
    nombre: string;
    descripcion: string;
}
export class CreateTableroDto {
    private constructor(public readonly nombre: string, public readonly descripcion: string) {}
    static create(props: CreateTableroDtoProps) {
        const {nombre, descripcion} = props;
        if (nombre.trim() === '' || nombre == null) {
            CustomError.UnprocessableEntity('Nombre es obligatorio');
        }
        if (descripcion.trim() === '' || descripcion == null) {
            CustomError.UnprocessableEntity('Descripción es obligatorio');
        }
        return new CreateTableroDto(nombre, descripcion);
    }
}
