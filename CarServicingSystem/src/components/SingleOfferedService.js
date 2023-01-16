import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container,Card,CardBody,CardTitle,CardSubtitle,CardText,Button } from 'reactstrap'

const SingleOfferedService = (props) => {
    console.log(props)
    const navigate=useNavigate();
    return (
        <div>
            <Container>
                <Card className="m-2" style={{ "min-height": "375px",'width': '18rem', "box-shadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
                    <img alt="Sample" src="https://www.supermechanic.in/wp-content/uploads/2018/06/ATF_supermechanic-_img.png" />
                    <CardBody>
                        <CardTitle tag="h5">
                            {props.offeredService.serviceName}
                        </CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                           &#8377; {props.offeredService.servicePrice}
                        </CardSubtitle>
                        <CardText style={{minHeight:'80px'}}>
                        {props.offeredService.serviceDescription}
                        </CardText>
                        <Button onClick={()=>{
                            navigate("/checkOut",{state:{...props}})
                        }} style={{backgroundColor:"#007580"}}>
                            Select
                        </Button>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
}

export default SingleOfferedService