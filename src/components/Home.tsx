import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToolCard } from './ToolCard';
// import document from '../icons/document.png'; Trying to fix a bug with image loading. See link: https://javascript.plainenglish.io/how-to-display-images-from-local-assets-images-folder-when-working-with-react-feb6c5dba526
// routePath,
//   imageUrl,
//   title,
//   description,

export const Home: FunctionComponent = () => {
  return (
    <Container fluid className="mt-5 p-5 mauto w-100 h-100 bg-light">
      <Row>
        {/* Repeat this entire <Col> tag in order to add the next ToolCard */}
        <Col>
          <ToolCard
            title="Auto Docker"
            description="A tool that automatically generates documentation for your code."
            imageUrl="https://www.google/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fdocker&psig=AOvVaw3rlfpdHa-flwasNFJ0AFQ0&ust=1624152690845000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCID797PGovECFQAAAAAdAAAAABAD"
            routePath="/autodocker"
          />
        </Col>
        <Col>
          <ToolCard
            title="Auto Docker"
            description="A tool that automatically generates documentation for your code."
            imageUrl="https://www.google/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fdocker&psig=AOvVaw3rlfpdHa-flwasNFJ0AFQ0&ust=1624152690845000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCID797PGovECFQAAAAAdAAAAABAD"
            routePath="/autodocker"
          />
        </Col>
        <Col>
          <ToolCard
            title="Auto Docker"
            description="A tool that automatically generates documentation for your code."
            imageUrl="https://www.google/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fdocker&psig=AOvVaw3rlfpdHa-flwasNFJ0AFQ0&ust=1624152690845000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCID797PGovECFQAAAAAdAAAAABAD"
            routePath="/autodocker"
          />
        </Col>
        <Col>
          <ToolCard
            title="Auto Docker"
            description="A tool that automatically generates documentation for your code."
            imageUrl="https://www.google/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fdocker&psig=AOvVaw3rlfpdHa-flwasNFJ0AFQ0&ust=1624152690845000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCID797PGovECFQAAAAAdAAAAABAD"
            routePath="/autodocker"
          />
        </Col>
      </Row>
    </Container>
  );
};
