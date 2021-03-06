import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import ProjectLogo from './ProjectLogo';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
         <Grid textAlign="center" verticalAlign='middle' columns={7} inverted>
        <Grid.Row color='black'>
          <Grid.Column>
            <ProjectLogo />
          </Grid.Column>
        <Grid.Column>
              <Link to={'/about'}>
                <Segment color='black' inverted>
                  About
                </Segment>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link to={'/terms-of-service'}>
                <Segment color='black' inverted>
                  Terms of Service
                </Segment>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link to={'/privacy-policy'}>
                <Segment color='black' inverted>
                  Privacy Policy
                </Segment>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link to={'/contact-us'}>
                <Segment color='black' inverted>
                  Contact Us
                </Segment>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <Link to={'/faq'}>
                <Segment color='black' inverted>
                  FAQ
                </Segment>
              </Link>
          </Grid.Column>
          <Grid.Column>
              <i className="facebook f icon large" ></i>
              <i className="twitter square icon large"></i>
              <i className="instagram icon large"></i>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}

export default Footer;
