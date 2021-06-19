import React, { FunctionComponent } from 'react';
import { Card } from 'react-bootstrap';

type CardProps = {
  routePath: string;
  imageUrl: string;
  title: string;
  description: string;
};

export const ToolCard: FunctionComponent<CardProps> = ({
  routePath,
  imageUrl,
  title,
  description,
}) => {
  return (
    <a href={routePath}>
      <Card className="mt-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};
