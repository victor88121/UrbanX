import React, { Component } from 'react';

import { Modal, Header, Icon, Button } from 'semantic-ui-react'


class TermsAndConditionsModalContent extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    }

    this.handleOnDisagree = this.handleOnDisagree.bind(this);
    this.handleOnAgree = this.handleOnAgree.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false })
  }

  handleOnDisagree() {
    this.props.handleModalAgreement(false);
    this.closeModal();
  }

  handleOnAgree() {
    this.props.handleModalAgreement(true);
    this.closeModal();
  }

  render() {
    return (
      <Modal onClose={ this.closeModal } open={ this.state.showModal } trigger={<a onClick={() => this.setState({ showModal: true })} className="sign-up-form-terms-and-conditions">Terms and Conditions</a>}>
        <Modal.Header>Terms and Conditions</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Introduction.</Header>
            <p>These Website Standard Terms And Conditions (these “Terms” or these “Website Standard Terms And Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website, if you have any objection to any of these Website Standard Terms And Conditions.</p>
            <p>This Website is not for use by any minors (defined as those who are not at least 18 years of age), and you must not use this Website if you a minor.</p>
            <Header>Intellectual Property Rights.</Header>
            <p>Other than content you own, which you may have opted to include on this Website, under these Terms, UrbanX and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.</p>
            <p>You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website.</p>
            <Header>Restrictions.</Header>
            <p>You are expressly and emphatically restricted from all of the following:</p>
            <p>1. publishing any Website material in any media</p>
            <p>2. selling, sublicensing and/or otherwise commercializing any Website material</p>
            <p>3. publicly performing and/or showing any Website material</p>
            <p>4. using this Website in any way that is, or may be, damaging to this Website</p>
            <p>5. using this Website in any way that impacts user access to this Website</p>
            <p>6. using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity</p>
            <p>7. engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website</p>
            <p>8. using this Website to engage in any advertising or marketing</p>
            <p>Certain areas of this Website are restricted from access by you and UrbanX may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion.  Any user ID and password you may have for this Website are confidential and you must maintain confidentiality of such information</p>
            <Header>Your Content.</Header>
            <p>In these Website Standard Terms And Conditions, “Your Content” shall mean any audio, video, text, images or other material you choose to display on this Website. With respect to Your Content, by displaying it, you grant Urbanx a non-exclusive, worldwide, irrevocable, royalty-free, sublicensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p>
            <p>Your Content must be your own and must not be infringing on any third party’s rights. Urbanx reserves the right to remove any of Your Content from this Website at any time, and for any reason, without notice.</p>
            <Header>No warranties.</Header>
            <p>This Website is provided “as is,” with all faults, and Urbanx makes no express or implied representations or warranties, of any kind related to this Website or the materials contained on this Website. Additionally, nothing contained on this Website shall be construed as providing consult or advice to you.</p>
            <Header>Limitation of liability.</Header>
            <p>In no event shall Urbanx, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract, tort or otherwise, and Urbanx, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
            <Header>Indemnification.</Header>
            <p>You hereby indemnify to the fullest extent Urbanx from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorney’s fees) arising out of or in any way related to your breach of any of the provisions of these Terms.</p>
            <Header>Severability.</Header>
            <p>If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein.</p>
            <Header>Variation of Terms.</Header>
            <p>Urbanx is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review such Terms on a regular basis to ensure you understand all terms and conditions governing use of this Website.</p>
            <Header>Assignment.</Header>
            <p>Urbanx shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, .you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
            <Header>Entire Agreement.</Header>
            <p>These Terms, including any legal notices and disclaimers contained on this Website, constitute the entire agreement between Urbanx and you in relation to your use of this Website, and supersede all prior agreements and understandings with respect to the same.</p>
            <Header>Governing Law & Jurisdiction.</Header>
            <p>These Terms will be governed by and construed in accordance with the laws of the State of StummCorp, and you submit to the non-exclusive jurisdiction of the state and federal courts located in StummCorp for the resolution of any disputes.</p>
          </Modal.Description>
          <br />
          <p>
            Do you agree to the Terms and Conditions?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={ this.handleOnDisagree } >
            <Icon name='remove' /> No
          </Button>
          <Button color='green' onClick={ this.handleOnAgree }>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default TermsAndConditionsModalContent;
