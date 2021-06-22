import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ToolCard } from './ToolCard';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
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
            imageUrl="https://cdn.vox-cdn.com/thumbor/IJifL8bGVqGXp8tS4r8eGMmLKuY=/715x248:1689x721/1820x1213/filters:focal(972x299:1278x605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg"
            routePath="/autodocker"
          />
        </Col>
        <Col>
          <ToolCard
            title="Auto Docker"
            description="A tool that automatically generates documentation for your code."
            imageUrl="https://cdn.vox-cdn.com/thumbor/IJifL8bGVqGXp8tS4r8eGMmLKuY=/715x248:1689x721/1820x1213/filters:focal(972x299:1278x605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg"
            routePath="/autodocker"
          />
        </Col>
        <Col>
          <ToolCard
            title="Auto Docker"
            description="A tool that automatically generates documentation for your code."
            imageUrl="https://cdn.vox-cdn.com/thumbor/IJifL8bGVqGXp8tS4r8eGMmLKuY=/715x248:1689x721/1820x1213/filters:focal(972x299:1278x605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg"
            routePath="/autodocker"
          />
        </Col>
        <Col>
          <ToolCard
            title="Auto Docker"
            description="A tool that automatically generates documentation for your code."
            imageUrl="https://cdn.vox-cdn.com/thumbor/IJifL8bGVqGXp8tS4r8eGMmLKuY=/715x248:1689x721/1820x1213/filters:focal(972x299:1278x605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg"
            routePath="/autodocker"
          />
        </Col>
      </Row>
    </Container>
  );
};
