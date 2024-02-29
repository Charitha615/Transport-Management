import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCheck, AiOutlinePlus, AiOutlineUnorderedList, AiOutlineDollarCircle, AiOutlineFrown  } from 'react-icons/ai';
import { DatePicker, Modal } from 'antd';
import moment from 'moment';
import 'antd/dist/reset.css';

const Dashboard = () => {
    const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `;

    const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
  `;

    const Button = styled.button`
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3498db;
    color: #fff;

    &:hover {
      background-color: #2980b9;
    }
  `;

    const SuccessModal = styled(Modal)`
    .ant-modal-body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  `;

    const showSuccessModal = () => {
        Modal.success({
            title: <AiOutlineCheck size={40} style={{ color: '#52c41a' }} />,
            content: 'I have availability',
        });
    };

    return (
        <Container>
            <Section>
                <DatePicker
                    placeholder="Select Start Date"
                    style={{ marginBottom: '10px' }}
                    getPopupContainer={(trigger) => trigger.parentNode}
                />
                <DatePicker
                    placeholder="Select End Date"
                    style={{ marginBottom: '10px' }}
                    getPopupContainer={(trigger) => trigger.parentNode}
                />
                <Button onClick={showSuccessModal}>
                    <AiOutlineCheck size={20} style={{ marginRight: '5px' }} />
                    Check Availability
                </Button>
            </Section>
            <Section>
                <Button>
                    <AiOutlinePlus size={20} style={{ marginRight: '5px' }} />
                    Add Trip
                </Button>
            </Section>
            <Section>
                <Button>
                    <AiOutlineUnorderedList size={20} style={{ marginRight: '5px' }} />
                    All Trips
                </Button>
            </Section>
            <Section>
                <Button>
                    <AiOutlineDollarCircle size={20} style={{ marginRight: '5px' }} />
                    Pricing
                </Button>
            </Section>

            {/* Success Modal */}
            <SuccessModal />
        </Container>
    );
};

export default Dashboard;
