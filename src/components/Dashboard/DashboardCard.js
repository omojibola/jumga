import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { StyledCardText } from './DashboardElements';

import { LocalMallOutlined } from '@material-ui/icons';

const DashboardCard = () => {
  return (
    <Container>
      <Row>
        <Col sm="4">
          {' '}
          <Card>
            <CardBody>
              <StyledCardText>
                {' '}
                10{' '}
                <LocalMallOutlined
                  style={{
                    color: 'var(--color-main)',
                    fontSize: 70,
                    marginLeft: 100,
                  }}
                />
              </StyledCardText>

              <StyledCardText>Products</StyledCardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <StyledCardText>
                {' '}
                5{' '}
                <LocalMallOutlined
                  style={{
                    color: 'var(--color-main)',
                    fontSize: 70,
                    marginLeft: 100,
                  }}
                />
              </StyledCardText>

              <StyledCardText>Orders</StyledCardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <StyledCardText>
                {' '}
                13{' '}
                <LocalMallOutlined
                  style={{
                    color: 'var(--color-main)',
                    fontSize: 70,
                    marginLeft: 100,
                  }}
                />
              </StyledCardText>

              <StyledCardText>Sales</StyledCardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardCard;
