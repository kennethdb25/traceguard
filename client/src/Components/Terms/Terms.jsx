import React from "react";
import "antd/dist/antd";
import "./terms.css";
import { Row, Col, Image, theme, Layout } from "antd";
const { Content } = Layout;

const Terms = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div
      style={{
        background: colorBgContainer,
        minHeight: 280,
        padding: 24,
        backgroundColor: "rgba(19, 55, 95, 1)",
        height: "100%",
        // borderRadius: borderRadiusLG,
      }}
    >
      <Content
        style={{
          padding: "24px 48px",
        }}
      >
        <div className="terms-header">
          <h1>TERMS AND CONDITIONS</h1>
        </div>
        <div className="terms-content">
          <big>
            Please read these terms and conditions thoroughly before using the
            Evidence Tracker application.
          </big>
          <h3>1. Acceptance of Terms</h3>
          <big>
            By using the Evidence Tracker app, you agree to abide by these terms
            and conditions. If you do not agree to any of these terms and
            conditions, do not use the application.
          </big>
          <br />
          <h3>2. License</h3>
          <big>
            a. Subject to your compliance with these terms and conditions, we
            grant you a limited, non-exclusive, non-transferable, revocable
            license to use the Evidence Tracker application for personal or
            internal business reasons only.
          </big>
          <br />
          <big>
            b. You are not permitted to sublicense, assign, transfer, or
            distribute the application or any associated materials.
          </big>
          <br />
          <h3>3. Data Privacy</h3>
          <big>
            a. The Evidence Tracker application may gather and save information
            provided by you, such as case details, evidence descriptions, and
            other data needed for operation.{" "}
          </big>
          <br />
          <big>
            b. We are committed to protecting your privacy and will not disclose
            your personal information with other parties unless as required by
            law or for the functioning of the application.
          </big>
          <br />
          <big>
            c. By using the application, you agree to the collection and use of
            your information in the manner specified herein.
          </big>
          <br />
          <h3>4. User responsibilities</h3>
          <big>
            a. You are completely responsible for the accuracy, legality, and
            reliability of the data entered into the Evidence Tracker
            application.
          </big>
          <br />
          <big>
            b. You agree not to use the program for any unlawful or prohibited
            purpose, or in any way that could damage, disable, overburden, or
            impair its performance.
          </big>
          <br />
          <h3>5. Intellectual Property</h3>
          <big>
            a. The Evidence Tracker application and any related intellectual
            property rights are owned by us or our licensors.
          </big>
          <br />
          <big>
            b. You are not permitted to modify, adapt, translate, reverse
            engineer, decompile, or disassemble the application or its source
            code.
          </big>
          <br />
          <h3>6. Limitation of Liability</h3>
          <big>
            a. We shall not be liable for any indirect, consequential,
            exemplary, incidental, special, or punitive damages resulting from
            or in connection with your use of the Evidence Tracker application.
          </big>
          <br />
          <big>
            b. Our total liability to you for any claims originating from or
            related to the application shall not exceed the amount paid by you,
            if any, for using the application.
          </big>
          <br />
          <h3>7. Termination</h3>
          <big>
            a. We reserve the right, at any time and without prior notice, to
            suspend or terminate your access to the Evidence Tracker application
            for any reason, including but not limited to breaking these terms
            and conditions.
          </big>
          <br />
          <big>
            b. You must stop using the program at that point, and any licenses
            and rights granted to you under these terms and conditions are also
            revoked.{" "}
          </big>
          <br />
          <h3>8. Modifications</h3>
          <big>
            Without giving you any notice, we reserve the right to modify these
            terms and conditions at any moment. Once changes are made, you will
            be deemed to have accepted the updated terms and conditions by
            continuing to use the Evidence Tracker application.
          </big>
          <br />
          <h3>9. Governing Law</h3>
          <big>
            The laws of [insert jurisdiction] shall apply to the interpretation
            and enforcement of these terms and conditions. The courts in [insert
            jurisdiction] shall have exclusive jurisdiction over any disputes
            arising under these terms and conditions.
          </big>
          <br />
          <br />
          <big>
            You agree to be bound by these terms and conditions and indicate
            that you have read and understand them by using the Evidence Tracker
            program. For any queries or worries, do get in touch with us at
            [insert contact details].
          </big>
          <br />
        </div>
      </Content>
    </div>
  );
};

export default Terms;
