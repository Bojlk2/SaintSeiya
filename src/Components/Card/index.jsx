import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'

const SaintCard = props => {
    const { image, name, caballero, handlers } = props.saintData
    return(
        <div className='col-12 col-md-6 mb-3'>
            <div className='card border rounded dish-card shadow'>
                <Card>
                    <CardImg
                    alt="Card image"
                    src={image}
                    top
                    width="100%"
                    />
                    <CardBody>
                    <CardTitle tag="h5">
                        Nombre: {name}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Armadura de {caballero}
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button
                        className='btn-danger'
                        onClick=''>
                        Borrar
                    </Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default SaintCard