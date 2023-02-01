import React from 'react';
import LaunchCard from '../LaunchCard';
import { mockLaunch } from './__mocks__/mockLaunch';

describe('LaunchCard', () => {
  beforeEach(() => {
    cy.mount(<LaunchCard launch={mockLaunch} />);
  });

  it('should render', () => {
    cy.findByTestId('launch-card-5eb87cd9ffd86e000604b32a').should('exist');
  });

  it('should render the launch name, image, serial and launch time', () => {
    cy.findByTestId('launch-image').should('have.attr', 'src', mockLaunch.links.patch.small);
    cy.findByTestId('launch-name').should('have.text', 'FalconSat');
    cy.findByTestId('launch-core-serial').should('have.text', 'Serial: Merlin1A');
    cy.findByTestId('launch-date').should('have.text', '3/24/2006, 10:30:00 PM');
  });

  it('should render the payloads', () => {
    cy.findByTestId('launch-payloads').should('contain.text', 'ID: 5eb0e4b5b6c3bb0006eeb1e1');
    cy.findByTestId('launch-payloads').should('contain.text', 'Type: Satellite');
  });

  it('should render the success status', () => {
    cy.findByTestId('launch-success').should('contain.text', 'Success: False');
  });

  it('should render the failure reason and time', () => {
    cy.findByTestId('launch-success').should('contain.text', 'Failure reason: merlin engine failure');
    cy.findByTestId('launch-success').should('contain.text', 'Time: 33');
  });
});
