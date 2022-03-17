import { Button } from "reactstrap"

const FormSaint = props => {
    const { handlers } = props
    return(
        <form action="" className="border rounded shadow p-3">
            <div className="form-group mb-3">
                <label htmlFor="">Imagen:</label>
                <input 
                    type="text"
                    className="form-control"
                    name="image"
                    onChange={handlers.saintFormHandler}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={handlers.saintFormHandler}
                />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="">Armadura</label>
                <input
                    type="text"
                    className="form-control"
                    name="caballero"
                    onChange={handlers.saintFormHandler}
                />
            </div>
            <Button
                type="button"
                className="btn-success"
                onClick={()=> {
                    handlers.saveSaint()
            }}>Guardar Caballero del Zodiaco</Button>
        </form>
    )
}

export default FormSaint