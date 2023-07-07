import React, { useCallback, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { FixedSizeList, ListChildComponentProps as RowProps } from 'react-window';
import Confirm from 'semantic-ui-react/dist/commonjs/addons/Confirm';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';
import { shallow } from 'zustand/shallow';
import { Status } from 'components';
import {
  Detail,
  Evolve,
  Nature,
  Nickname,
  Pokemon,
  ScrollList,
  Swap,
} from 'components/Tracker/elements';
import { TYPE_COLOR } from 'constants/colors';
import { POKEMAP } from 'constants/pokemon';
import ALL_ZONE_IDS from 'constants/zoneIds'
import useRemtoPx from 'hooks/useRemToPx';
import { selectNAGeneration } from 'selectors';
import useStore from 'store';
import { ReactComponent as PokeballSVG } from 'assets/svg/pokeball.svg';
import styles from './Encounters.module.scss';

const NICKNAME_HEIGHT = 15.714; // 220px
const NORMAL_HEIGHT = 12.857; // 180px
const GYM_LEADERS = 13

const Encounters = React.memo(function Encounters() {
  const { t } = useTranslation('tracker');
  const listRef = useRef(null);
  const games = useStore(useCallback((state) => state.games, []));
  const text = useStore(useCallback((state) => state.text, []));
  const darkMode = useStore(useCallback((state) => state.darkMode, []));
  const missing = useStore(useCallback((state) => state.missing, []));
  const gens = useStore(useCallback((state) => state.gens, []));
  const types = useStore(useCallback((state) => state.types, []));
  const nicknames = useStore(useCallback((state) => state.nicknames, []));
  const isNatureGen = useStore(selectNAGeneration);
  const selectedGame = useStore(
    useCallback((state) => state.selectedGame, []),
    shallow
  );
  const clearEncounter = useStore(
    useCallback((state) => state.clearEncounter, []),
    shallow
  );
  const deleteEncounter = useStore(
    useCallback((state) => state.deleteEncounter, []),
    shallow
  );
  const changeLevel = useStore(
    useCallback((state) => state.changeLevel, []),
    shallow
  );
  const [encounterToDelete, setEncounterToDelete] = useState<number>(null);
  const [confirm, setConfirm] = useState(false);
  const itemSize = useRemtoPx(nicknames ? NICKNAME_HEIGHT : NORMAL_HEIGHT);

  const filteredEncounters = useMemo(() => {
    return games[selectedGame?.value]?.encounters?.filter((enc) => {
      const upperCase = text?.toUpperCase();
      const foundPokemon = POKEMAP.get(enc.pokemon);
      return (
        (enc.location.toUpperCase()?.includes(upperCase) ||
          enc.status?.text.toUpperCase()?.includes(upperCase) ||
          enc.nickname?.toUpperCase()?.includes(upperCase) ||
          foundPokemon?.text?.toUpperCase()?.includes(upperCase)) &&
        (gens.length > 0 ? gens.includes(foundPokemon?.generation) : true) &&
        (types.length > 0
          ? types.includes(foundPokemon?.type) || types.includes(foundPokemon?.dualtype)
          : true) &&
        (!missing || (missing && (!enc.pokemon || !enc.status)))
      );
    });
  }, [games, gens, missing, selectedGame, text, types]);

  const handleClear = (encounterId: number) => {
    clearEncounter(encounterId);
  };

  const handleConfirm = (encounterId: number) => {
    setEncounterToDelete(encounterId);
    setConfirm(true);
  };

  const handleDelete = () => {
    deleteEncounter(encounterToDelete);
    setConfirm(false);
    setEncounterToDelete(null);
    toast.success('Successfully deleted encounter');
  };

  const handleScroll = (index: number) => {
    listRef.current?.scrollToItem(index + 1, 'center');
  };
  
  const navigate = useNavigate();

  const handleOpen = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/badgedetail/${selectedGame?.value}/${index}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.code === 'Enter' || e.code === 'Space') {
      navigate(`/badgedetail/${selectedGame?.value}/${index}`);
    }
  };

  const renderRow: React.FC<RowProps> = ({ index, style }) => {
    const encounter = filteredEncounters[index];
    const foundPokemon = POKEMAP.get(encounter.pokemon);
    const isGreyedOut = encounter?.status?.value === 2;
    const isTrainerRoute = encounter.zoneID.some(id =>
      ALL_ZONE_IDS.some(zoneId => zoneId.includes(id))
    );

    let trainerIndex: number | undefined;
    
    if (isTrainerRoute) {
      trainerIndex = ALL_ZONE_IDS.findIndex(zoneId =>
        zoneId.some(id => encounter.zoneID.includes(id))
      );
    }
    return (
      <div style={style}>
        <div
          className={`${styles.row} ${encounter?.pokemon ? styles.type : ''} ${
            isGreyedOut ? styles.greyedOut : ''
          }`}
          data-testid={`encounter-${index}`}
          style={{
            borderImage: encounter?.pokemon
              ? `linear-gradient(to left, ${
                  TYPE_COLOR[foundPokemon?.dualtype || foundPokemon?.type]
                } , ${TYPE_COLOR[foundPokemon.type]}) 1`
              : undefined,
          }}
        >
          <div className={styles.header}>
            <span className={styles.location}>{encounter.location}</span>
            <div className={styles.buttons}>
            {isTrainerRoute && 
            <div
              className={styles.question}
              data-testid={`badge-detail-${trainerIndex + GYM_LEADERS}`}
              onClick={(e) => handleOpen(e, trainerIndex + GYM_LEADERS)}
              onKeyPress={(e) => handleKeyPress(e, trainerIndex + GYM_LEADERS)}
              role="button"
              tabIndex={0}
            >
              <Button
                aria-label="area-trainers"
                basic
                compact
                inverted={darkMode}
                type="button"
              >
                <Icon name="user" />
                <Label
                  color={darkMode ? 'grey' : 'grey'}
                  inverted={darkMode}
                  style={{ height: '15px', display: 'inline-flex', alignItems: 'center' }}
                >
                  Trainers
                </Label>
              </Button>
            </div>
            }
              {!!encounter.pokemon && <Detail encounter={encounter} />}
              <Popup
                inverted={darkMode}
                on="click"
                trigger={
                  <Button
                    aria-label="encounter-options"
                    basic
                    compact
                    data-testid={`encounter-options-${index}`}
                    icon
                    inverted={darkMode}
                    type="button"
                  >
                    <Icon name="ellipsis vertical" />
                  </Button>
                }
              >
                <ul className={styles.editOptions} role="menu">
                  {!!encounter.pokemon && (
                    <>
                      <li
                        aria-label="level up encounter"
                        data-testid={`level-up-${index}`}
                        onClick={() => changeLevel(encounter.id, true)}
                        role="presentation"
                      >
                        {t('level_up')} ({encounter?.details?.level ?? 0}) <Icon name="arrow up" />
                      </li>
                      {encounter?.details?.level > 1 && (
                        <li
                          aria-label="decrease encounter level"
                          data-testid={`level-down-${index}`}
                          onClick={() => changeLevel(encounter.id, false)}
                          role="presentation"
                        >
                          {t('level_down')} ({encounter?.details?.level ?? 0}){' '}
                          <Icon name="arrow down" />
                        </li>
                      )}
                    </>
                  )}
                  <li
                    aria-label="reset encounter"
                    data-testid={`reset-encounter-${index}`}
                    onClick={() => handleClear(encounter.id)}
                    role="presentation"
                  >
                    {t('reset_2')} <Icon name="repeat" />
                  </li>
                  <li
                    aria-label="delete encounter"
                    data-testid={`delete-encounter-${index}`}
                    onClick={() => handleConfirm(encounter.id)}
                    role="presentation"
                  >
                    {t('delete')} <Icon name="trash" />
                  </li>
                </ul>
              </Popup>
            </div>
          </div>
          {nicknames && <Nickname encounterId={encounter.id} nickname={encounter.nickname} />}
          <Pokemon encounter={encounter} foundPokemon={foundPokemon} />
          <Status encounter={encounter} />
          <div className={styles.moreOptions}>
            {!!foundPokemon?.evolve && (
              <Evolve encounter={encounter} evolveIds={foundPokemon?.evolve} showLabel={false} />
            )}
            {!!foundPokemon && [1, 3, 4, 7].includes(encounter.status?.value) && (
              <Swap encounter={encounter} />
            )}
            {!!foundPokemon && isNatureGen && <Nature encounter={encounter} />}
            <div className={styles.levelButtons}>
              {!!encounter.pokemon && (
                <>
                  <span>{t('level', { ns: 'rules' })}:</span>
                  <Button
                    aria-label="level-up-button"
                    className={styles.button}
                    data-testid={`level-up-button-${encounter.id}`}
                    icon
                    onClick={() => changeLevel(encounter.id, true)}
                    title={t('level_up')}
                    type="button"
                  >
                    <Icon name="arrow up" />
                  </Button>
                  <Button
                    aria-label="level-down-button"
                    className={styles.button}
                    data-testid={`level-down-button-${encounter.id}`}
                    icon
                    onClick={() => changeLevel(encounter.id, false)}
                    title={t('level_down')}
                    type="button"
                  >
                    <Icon name="arrow down" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.table}>
      {selectedGame ? (
        <>
          <div className={styles.list} data-testid="encounters-list">
            {/* @ts-ignore */}
            <FixedSizeList
              height={4000}
              itemCount={filteredEncounters?.length}
              itemSize={itemSize}
              ref={listRef}
              width="100%"
            >
              {renderRow}
            </FixedSizeList>
          </div>
          <ScrollList encounters={filteredEncounters} scrollTo={handleScroll} />
        </>
      ) : (
        <div className={styles.noGame}>
          <PokeballSVG />
          <span>{t('please_select', { ns: 'common' })}</span>
        </div>
      )}
      <Confirm
        closeOnDimmerClick
        content={t('confirm_delete')}
        open={confirm}
        onCancel={() => setConfirm(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
});

export default Encounters;
