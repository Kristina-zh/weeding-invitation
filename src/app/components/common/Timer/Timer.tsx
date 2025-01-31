import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';

import './Timer.css';
import { useLanguage } from '../../../context/LanguageContext';
import { headerTranslations } from '../../../translations';

const zerofill = (value: number) => {
  return value < 10 && value >= 0 ? '0' + value : value.toString();
};

const Tracker: React.FC<{ label: string; keyName: string; time: { [key: string]: number } }> = ({ label, keyName, time }) => {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [show, setShow] = useState(false);
  const trackerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const val = time[keyName];
    if (val === undefined) {
      setShow(false);
      return;
    }

    setShow(true);
    const adjustedVal = val < 0 ? 0 : val;

    if (adjustedVal !== current) {
      setPrevious(current);
      setCurrent(adjustedVal);

      // Trigger flip animation
      if (trackerRef.current) {
        trackerRef.current.classList.remove('flip');
        void trackerRef.current.offsetWidth; // Trigger reflow
        trackerRef.current.classList.add('flip');
      }
    }
  }, [keyName, time, current]);

  return (
    <div className="flip-clock__piece" style={{ display: show ? 'block' : 'none' }} ref={trackerRef}>
      <div className="flip-clock__card flip-card">
        <b className="flip-card__top">{zerofill(current)}</b>
        <b className="flip-card__bottom" data-value={zerofill(current)}></b>
        <b className="flip-card__back" data-value={zerofill(previous)}></b>
        <b className="flip-card__back-bottom" data-value={zerofill(previous)}></b>
      </div>
      <span className="flip-clock__slot">{label}</span>
    </div>
  );
};

const Timer: React.FC<{ date: string; callback?: () => void }> = ({ date, callback }) => {
  const { language } = useLanguage();

  const [time, setTime] = useState({
    Days: 0,
    Hours: 0,
    Minutes: 0,
    Seconds: 0,
    Total: 0,
  });
  const [countdown, setCountdown] = useState<moment.Moment | null>(null);
  const frameRef = useRef<number | null>(null);

  const trackers = [
    { label: headerTranslations[language].countdown.days, keyName: 'Days' },
    { label: headerTranslations[language].countdown.hours, keyName: 'Hours' },
    { label: headerTranslations[language].countdown.minutes, keyName: 'Minutes' },
    { label: headerTranslations[language].countdown.seconds, keyName: 'Seconds' },
  ];

  useEffect(() => {
    if (date) {
      setCountdown(moment(date, 'YYYY-MM-DD HH:mm:ss'));
    } else {
      setCountdown(moment().endOf('day'));
    }

    if (callback) {
      callback();
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [date, callback]);

  useEffect(() => {
    const update = () => {
      frameRef.current = requestAnimationFrame(update);
      const now = moment();
      const countdownTime = countdown ? countdown.diff(now) : 0;
      setTime({
        Days: Math.max(0, Math.floor(countdownTime / (1000 * 60 * 60 * 24))),
        Hours: Math.max(0, Math.floor((countdownTime / (1000 * 60 * 60)) % 24)),
        Minutes: Math.max(0, Math.floor((countdownTime / 1000 / 60) % 60)),
        Seconds: Math.max(0, Math.floor((countdownTime / 1000) % 60)),
        Total: countdownTime,
      });
    };

    update();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [countdown]);

  return (
    <div className="flip-clock flex transform scale-[0.5]">
      {trackers.map(({ label, keyName }) => (
        <Tracker key={keyName} label={label} keyName={keyName} time={time} />
      ))}
    </div>
  );
};

export default Timer;