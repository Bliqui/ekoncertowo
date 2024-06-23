import {
  Flex,
  InputGroup,
  Input,
  Select,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react"
import { FormEvent, useState } from "react"

import IcoSearch from "assets/search.svg?react"
import { allCountries } from "../consts"

type FiltersProps = {
  setQueryParams: (args: {
    event: string
    country: string
    startDate: string
    endDate: string
  }) => void
}

export const Filters = ({ setQueryParams }: FiltersProps) => {
  const [formValues, setFormValues] = useState({
    event: "",
    country: "",
    startDate: "",
    endDate: "",
  })

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setQueryParams(formValues)
  }

  return (
    <Flex as="form" gap="12px" flexWrap="wrap" justifyContent="center">
      <Input
        placeholder="Wydarzenie / Artysta"
        width="230px"
        onChange={(e) =>
          setFormValues((prev) => ({ ...prev, event: e.target.value }))
        }
        value={formValues.event}
      />
      <InputGroup width="230px">
        <InputLeftElement pointerEvents="none">
          {/* <PhoneIcon color="gray.300" /> */}
        </InputLeftElement>
        <Select
          placeholder="Kraj"
          value={formValues.country}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, country: e.target.value }))
          }
        >
          {allCountries.map(({ name, code }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </Select>
      </InputGroup>
      <Flex gap="12px" flexWrap="wrap" justifyContent="center">
        <Input
          type="date"
          width="230px"
          value={formValues.startDate}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, startDate: e.target.value }))
          }
        />
        <Input
          type="date"
          width="230px"
          value={formValues.endDate}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, endDate: e.target.value }))
          }
        />
      </Flex>
      <IconButton
        onClick={handleSubmit}
        background="textAccent"
        icon={<IcoSearch />}
        type="submit"
        aria-label="Submit search form"
        width={{ base: "230px", md: "25px" }}
      />
    </Flex>
  )
}
