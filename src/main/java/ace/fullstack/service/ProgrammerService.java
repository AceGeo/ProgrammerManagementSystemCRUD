package ace.fullstack.service;

import ace.fullstack.dto.ProgrammerDto;

import java.util.List;

public interface ProgrammerService {

    ProgrammerDto addProgrammer (ProgrammerDto programmerDto);

    ProgrammerDto getProgrammer(Long id);

    List<ProgrammerDto> getAllProgrammers();

    ProgrammerDto updateProgrammer(ProgrammerDto programmerDto, Long id);

    void deleteProgrammer(Long id);


}
