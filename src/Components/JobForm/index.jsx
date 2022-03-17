import {Form, Row, FormGroup, Label, Input, Button } from 'reactstrap'

const JobForm = props => {
    let skills =['FrontEnd', 'Senior', 'HTML', 'CSS', 'JavaScript', 'FullStack', 'Midweight', 'Python', 'React', 'Junior', 'Sass', 'Ruby', 'Backend', 'RoR', 'Vue', 'Django']

    return(
        <form action="">
            <label htmlFor="">
                Empresa
            </label>
            <input
                name="company"
                placeholder="Ej: Sabritas"
                type="text" />
            <label htmlFor="">
                Imagen de la Empresa
            </label>
            <input
                name="company"
                placeholder="Ej: Sabritas"
                type="text" />
            <label htmlFor="">
                Empleo
            </label>
            <input
                name="job"
                placeholder="Ej: Fullstack Developer JavaScript"
                type="text" />
            <label htmlFor="">
                Fecha de Publicación
            </label>
            <input
                name="date"
                placeholder="Ej: Sabritas"
                type="date" />
            <label htmlFor="">
                Jornada
            </label>
            <input
                name="journal"
                placeholder="Ej: Full Time, Part Time..."
                type="text" />
            <label htmlFor="">
                Lugar de Trabajo
            </label>
            <input
                name="workPlace"
                placeholder="Ej: CDMX, Guadalajara, Remoto..."
                type="text"
            />
            <label>
              Skills:
            </label>
            <select name='skills1' >
                {skills.map((skill, index) => {
                    return <option key={index}>{skill}</option>
                })}
            </select>
            <label>
              Skills:
            </label>
            <select name='skills1' >
                {skills.map((skill, index) => {
                    return <option key={index}>{skill}</option>
                })}
            </select>
            <label>
              Skills:
            </label>
            <select name='skills1' >
                {skills.map((skill, index) => {
                    return <option key={index}>{skill}</option>
                })}
            </select>
            <label>
              Skills:
            </label>
            <select name='skills1' >
                {skills.map((skill, index) => {
                    return <option key={index}>{skill}</option>
                })}
            </select>
            <button>
                Guardar
            </button>
        </form>

//         <Form>
//   <Row form>
//     <Col md={6}>
//       <FormGroup>
//         <Label>
//           Empresa
//         </Label>
//         <Input
//           
//         />
//       </FormGroup>
//     </Col>
//     <Col md={6}>
//       <FormGroup>
//         <Label>
//           Empleo
//         </Label>
//         <Input
//           name="job"
//           placeholder="Ej: Fullstack Developer JavaScript"
//           type="text"
//         />
//       </FormGroup>
//     </Col>
//   </Row>
//   <FormGroup>
//     <Label>
//       Fecha de Publicación
//     </Label>
//     <Input
//       name="date"
//       placeholder="date placeholder"
//       type="date"
//     />
//   </FormGroup>
//   <FormGroup>
//     <Label>
//       Jornada
//     </Label>
//     <Input
//       name="journal"
//       placeholder="Ej: Full Time, Part Time..."
//     />
//   </FormGroup>
//   <Row form>
//     <Col md={6}>
//       <FormGroup>
//         <Label>
//           Lugar de Trabajo
//         </Label>
//         <Input
//           name="workPlace"
//           placeholder="Ej: CDMX, Guadalajara, Remoto..."
//         />
//       </FormGroup>
//     </Col>
//     </Row>
//     <FormGroup>
//     <Label>
//       Skills
//     </Label>
//     <Input
//       name="skills1"
//       type="select"
//     >
//         {skills.map((skill, index) => {
//             return <option key={index}>{skill}</option>
//         })}
//     </Input>
//   </FormGroup>

  
//   <Button>
//     Sign in
//   </Button>
// </Form>
    )
}

export default JobForm