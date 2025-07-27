import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
    const getStatusClass = (status) => {
        return status.toLowerCase() === 'ongoing' 
            ? styles.statusOngoing 
            : styles.statusScheduled;
    };

    return (
        <div className={styles.box}>
            <h3 className={styles.cohortName}>{cohort.name}</h3>
            <dl>
                <div className={styles.detailRow}>
                    <dt>Started On</dt>
                    <dd>{cohort.startDate}</dd>
                </div>
                <div className={styles.detailRow}>
                    <dt>Current Status</dt>
                    <dd className={getStatusClass(cohort.status)}>{cohort.status}</dd>
                </div>
                <div className={styles.detailRow}>
                    <dt>Coach</dt>
                    <dd>{cohort.coach}</dd>
                </div>
                <div className={styles.detailRow}>
                    <dt>Trainer</dt>
                    <dd>{cohort.trainer}</dd>
                </div>
            </dl>
        </div>
    );
};

export default CohortDetails;