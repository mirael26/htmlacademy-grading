import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from 'assets/img/icon-close.svg';
import { useState } from 'react';
import { IUserInfo } from 'types';
import { RegExpTest } from 'consts';
import { useAppDispatch } from 'hooks/hooks';
import { postOrder } from 'store/api-action';

const ErrorMessage = {
  NameFormatError: 'В имени допускаются только буквы русского и латинского алфавита, цифры и пробел',
  PhoneFormatError: 'Номер должен состоять из 10 цифр',
  PeopleCountFormatError: 'Пожалуйста, введите число',
  PeopleCountZeroError: 'В квесте должен участвовать хотя бы один человек',
} as const;

interface BookingModalClose {
  onPopupClose: () => void,
}

const BookingModal = ({onPopupClose}: BookingModalClose) => {
  const dispatch = useAppDispatch();
  
  const [formValue, setFormValue] = useState<IUserInfo>({name: '', phone: '', peopleCount: null, isLegal: false});
  const [errors, setErrors] = useState<{[key: string]: string | null}>({name: null, phone: null, peopleCount: null, isLegal: null});

  const handleInputChange = (evt: React.SyntheticEvent, name: string) => {
    let value: string | number | boolean | null = (evt.target as HTMLInputElement).value;
    if (name === 'peopleCount') {
      value = (value === '') ? null : +value;
    }
    if (value === 'on') {
      value = true;
    }
    setErrors(prev => ({...prev, [name]: null}));
    setFormValue(prev => ({...prev, [name]: value}));
  }

  const checkFormValidity = () => {

    const checkNameValidity = () => {
      const isFormatValid = RegExpTest.Name.test(formValue.name);
      if (!isFormatValid) {
        setErrors(prev => ({...prev, name: ErrorMessage.NameFormatError}));
      }
      return isFormatValid;
    }

    const checkPhoneValidity = () => {
      const isFormatValid = RegExpTest.Phone.test(formValue.phone);
      if (!isFormatValid) {
        setErrors(prev => ({...prev, phone: ErrorMessage.PhoneFormatError}));
      }
      
      return isFormatValid;
    }

    const checkPeopleCountValidity = () => {
      const isFormatValid = formValue.peopleCount ? RegExpTest.PeopleCount.test(String(formValue.peopleCount)) : false;
      if (!isFormatValid) {
        setErrors(prev => ({...prev, peopleCount: ErrorMessage.PeopleCountFormatError}));
      }
      const isCountValid = formValue.peopleCount !== 0;
      if (!isCountValid) {
        setErrors(prev => ({...prev, peopleCount: ErrorMessage.PeopleCountZeroError}));
      }
      return isFormatValid && isCountValid;
    }

    const isNameValid = checkNameValidity();
    const isPhoneValid = checkPhoneValidity();
    const isPeopleCountValid = checkPeopleCountValidity();

    return isNameValid && isPhoneValid && isPeopleCountValid && formValue.isLegal;
  };

  const handleFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    const isFormValid = checkFormValidity();
    if (isFormValid) {
      dispatch(postOrder(formValue));
    }
  };

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={onPopupClose}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleFormSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              value={formValue.name}
              onChange={evt => handleInputChange(evt, 'name')}
            />
            {errors.name && <S.BookingErrorMessage>{errors.name}</S.BookingErrorMessage>}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInputWrapper>
              <S.BookingInput
                type="tel"
                id="booking-phone"
                name="booking-phone"
                placeholder=""
                required
                value={formValue.phone}
                onChange={evt => handleInputChange(evt, 'phone')}
              />
            </S.BookingInputWrapper>
            {errors.phone && <S.BookingErrorMessage>{errors.phone}</S.BookingErrorMessage>}
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              value={formValue.peopleCount ?? ''  }
              onChange={evt => handleInputChange(evt, 'peopleCount')}
            />
            {errors.peopleCount && <S.BookingErrorMessage>{errors.peopleCount}</S.BookingErrorMessage>}
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              checked={formValue.isLegal}
              onChange={evt => handleInputChange(evt, 'isLegal')}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
