import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const ProjectCard =({id, title, subtitle, img, githubLink, hrefLink, labels}) => {
    return (
    <Card sm="3" md="4">
      <CardBody>
        <CardTitle>
          {title}
        </CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardBody>
      <CardImg width="100%" height="auto" src={img} alt="Card image cap"/>
      <CardBody>
        <CardText>Key Words: {labels.map(label => `${label} `)}</CardText>
        <CardLink href={hrefLink}>GitHub</CardLink>
        <CardLink href={githubLink}>Site Link</CardLink>
      </CardBody>
    </Card>
  )}


export default ProjectCard
